var regStartAndEndWith = ["GP","EC","MP","L","ND", "CY","CA"];
var registrations = ["RG 45 HN GP","LKG 679 EC","GHT 456 MP","FGT 491 L","ND 123-456",
"CY 678-453",
"CA 1234-123"];
function regCheck(registrations,regStartAndEndWith)
{return registrations.endsWith(regStartAndEndWith);};
