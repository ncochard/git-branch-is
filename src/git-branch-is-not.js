import cli from "cli";
import { gitBranchIsNot } from "./index";

cli.main(function(args) {
    return gitBranchIsNot(...args);
});
