
function isFromCapeTown(registrations) {
    return registrations.startsWith("CA");
};
console.log(isFromCapeTown(["CA 123 908","CJ 123 908"]))