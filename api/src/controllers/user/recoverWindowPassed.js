const PASS_RECOVERY_WINDOW=600; // 10 minutes
const RECOVERY_LINK_EXPIRY=3*PASS_RECOVERY_WINDOW; // 30 minutes

const recoveryWindowPassed = (pass_recovery_blob) => {

    // check if the password recovery blob's hash has expired
    // return true;
    const { hash, genTime } = pass_recovery_blob;
    const currentTime = new Date().getTime();
    if (!hash || !genTime) {
        return true;
    }
    const secondsPassed = Math.abs(currentTime - genTime)/1000;
    return secondsPassed>RECOVERY_LINK_EXPIRY;
}

module.exports = recoveryWindowPassed;
