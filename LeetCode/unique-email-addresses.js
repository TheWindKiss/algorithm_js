/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    const set = new Set();
    emails.forEach((item) => {
        let [local, domain] = item.split('@');
        local = local.replace(/\./g, '').split('+')[0];
        set.add(local + '@' + domain);
    })
    return set.size;
};