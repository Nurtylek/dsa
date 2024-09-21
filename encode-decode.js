const HASH_PREFIX = String.fromCharCode(257);

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    return strs.join(HASH_PREFIX);
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    return s.split(HASH_PREFIX);
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
