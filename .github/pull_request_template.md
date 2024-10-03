<!--
## About PRs

     A good description will help reviewers come up to speed on the intent of your changes much faster, which in turn leads to shorter development time.
     Remember that not everyone may be as familiar with the code as you. It should answer the questions:
     - "What is the problem being addressed?"
     - "How am I addressing it?".

    In addition, the description reflects what you intended to change, which is useful when reviewers look at what actually changed.

     https://dev.to/erikmelone/pull-request-descriptions-should-not-be-optional-53n1

     For a timely review/response, please avoid force-pushing additional
     commits if your PR already received reviews or comments.

     Before submitting a Pull Request, please ensure you've done the following:
     -  Create small PRs. In most cases this will be possible.
     - ✅ Provide tests for your changes.
     - 📝 Use descriptive commit messages.
     - 📗 Update any related documentation and include any relevant screenshots (for example, for UI changes)
-->

> [!CAUTION]
> ### Important - Git Workflow
> Remember to merge your PR with the CLI using a fast-forward-only merge, otherwise you might break commit history between `develop` and `master`.
> This might not be absolutely necessary for feature branches, but you should still do it to build a habit and avoid mistakes when merging to `master`.
>
> If you're merging a feature branch, be sure to update it with the latest changes. This needs to be done by rebasing it on top of `develop`.
>
> **1. Example for merging a feature branch:**
> ```bash
> git checkout develop
> git pull
>
> git merge --ff-only <your_feature_branch_name>
> git push
> ```
>
> **2. Example for merging to `master`**
> ```bash
> git checkout develop
> git pull
>
> git checkout master
> git pull
>
> git merge --ff-only develop
> git push
> ```

## What type of PR is this? (check all applicable)

- [] Refactor
- [] Feature
- [] Bug Fix
- [] Optimization
- [] Documentation Update

## Describe your changes

## Issue ticket number and link

## Checklist before requesting a review

- [] Do you have a descriptive commit message with a short title (first line).?
- [] Did you give a descriptive title to your PR?
- [] Have you performed a self-review of your code?
- [] Have you rebased your branch off develop?
- [] Are all unit test passing? (see Sonar report )
- [] Does your implementation addresses the ticket's Acceptance Criteria?
- [] Have you  done your changes in a separate branch?  Branches MUST have descriptive names that start with either the `snack/` or `feature/` prefixes. Good examples are: `feature/PRO-653122_update_get_user_function` or `snack/update_pr_template`.
- [] Have all github checks passed? (if they are not passing, fix them first)
- [] For feature/snack branches, Your pull request MUST NOT target the `main` branch on this repository. You probably want to target `develop` instead.
- [] For hotfix branches, target could be either develop or main

## Added/updated tests

_The SDLC requires 80%+ code coverage for code changes._

- [] Yes
- [] No, and this is why: _please replace this line with details on why tests
      have not been included_
- [] I need help with writing tests
