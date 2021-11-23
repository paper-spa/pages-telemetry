const core = require('@actions/core')

// Load variables from Actions runtime
module.exports = {
  workflowRun: process.env.GITHUB_RUN_ID,
  repositoryNwo: process.env.GITHUB_REPOSITORY,
  githubToken: core.getInput('token')
}
