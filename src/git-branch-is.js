import cli from "cli";
import { gitBranchIs } from "./index";

cli.main(function(args) {
    return gitBranchIs(...args);
});
