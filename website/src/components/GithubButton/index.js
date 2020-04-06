import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export const GithubButton = () => {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <a
      className="github-button"
      href={siteConfig.customFields.mainRepoUrl}
      title="See this project on GitHub"
      data-icon="octicon-star"
      data-show-count="true"
      data-count-href={`/${siteConfig.organizationName}/${siteConfig.projectName}/stargazers`}
      data-count-aria-label="# stargazers on GitHub"
      aria-label="Star this project on GitHub">
      T-Regx
    </a>
  );
};
