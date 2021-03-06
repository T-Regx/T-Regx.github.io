<?php
namespace CodeTest\Parser\Mods;

use AssertionError;

class MultipleReturnValues extends PureModification
{
    public function modify(array $snippet, ?string $argument): array
    {
        return $this->forModLine($snippet, $argument ?? count($snippet));
    }

    private function forModLine(array $snippet, int $modLine): array
    {
        if (count($snippet) < $modLine) {
            throw new AssertionError("MultipleReturnValues: Argument #1 '$modLine' is greater than the number of lines");
        }
        if ($modLine <= 0) {
            throw new AssertionError("MultipleReturnValues: Argument #1 '$modLine' doesn't correspond to the number of lines");
        }
        return $this->performModification($snippet, $modLine);
    }

    private function performModification(array $snippet, int $modLine): array
    {
        [$payload, $toPack] = $this->splitArraysAtIndexFromEnd($snippet, $modLine);
        return array_merge($payload, ['return ['], $this->addCommas($toPack), ['];']);
    }

    private function splitArraysAtIndexFromEnd(array $array, int $indexFromEnd): array
    {
        $payload = array_slice($array, 0, count($array) - $indexFromEnd);
        $toPack = array_slice($array, count($array) - $indexFromEnd, $indexFromEnd);
        return [$payload, $toPack];
    }

    private function addCommas(array $toPack): array
    {
        return array_map(fn(string $line) => rtrim($line, ';') . ',', $toPack);
    }
}
