## Feature Branch Workflow

1. Fork the main project
1. Clone it down
1. Create a branch > `$ git checkout -b <BRANCH_NAME>`
1. Code/Hack/Test
1. Commit your code/create PR on Github
1. Review Code / Merge PR
1. Sync your Master with the Project master

    ```sh
    $ git checkout master
    $ git pull fetch upstream
    $ git merge upstream/master
    ```

Resource - [Atlassian Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)