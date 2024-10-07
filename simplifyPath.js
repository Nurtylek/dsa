/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const changedPath = path.split('/');

    const stack = [];

    for (const currPath of changedPath) {
        if (currPath === '.' || currPath === '') continue;

        if (currPath === '..') {
            stack.pop()
        } else {
            stack.push(currPath);
        }
    }

    return '/' + stack.join('/')
};
