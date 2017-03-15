/* global process */
import { Repository, Branch } from 'nodegit';

function handleError(err) {
    console.error(err);
    process.exit(2);
}

function getBranchName(path) {
    return Repository.open(path).then(function(repository) {
        return repository.getCurrentBranch().then(function(reference) {
            return Branch.name(reference);
        });
    });
}

export function gitBranchIs(expected = "master") {
    const path = process.cwd();
    return getBranchName(path).then(actual => {
        if(expected === actual) {
            process.exit(0);
        } else{
            process.exit(1);
        }
    }).catch(handleError);
}

export function gitBranchIsNot(expected = "master") {
    const path = process.cwd();
    return getBranchName(path).then(actual => {
        console.log(actual);
        if(expected === actual) {
            process.exit(1);
        } else{
            process.exit(0);
        }
    }).catch(handleError);
}