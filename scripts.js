/**
 * Function to determine if string `s` is a subsequence of string `t`.
 * A subsequence is a sequence that can be derived from another sequence by deleting some 
 * elements without changing the order of the remaining elements.
 * 
 * @param {string} s - The string we are checking as a subsequence.
 * @param {string} t - The string in which we are checking the subsequence.
 * @return {boolean} - Returns true if `s` is a subsequence of `t`, otherwise false.
 */
var isSubsequence = function(s, t) {
    let sIndex = 0; // Pointer to track the current character in `s`.
    let tIndex = 0; // Pointer to track the current character in `t`.

    // Iterate while both indices are within the length of their respective strings.
    while (sIndex < s.length && tIndex < t.length) {
        // If characters at the current positions in `s` and `t` match,
        // move the `sIndex` pointer to check the next character in `s`.
        if (t.charAt(tIndex) == s.charAt(sIndex)) {
            sIndex++; // Move to the next character in `s`.
        }
        // Always move the `tIndex` pointer to check the next character in `t`.
        tIndex++;
    }

    // After the loop, if `sIndex` has reached the length of `s`, it means all characters in `s`
    // have been found in sequence in `t`. If so, return true. Otherwise, return false.
    return sIndex == s.length;
};
