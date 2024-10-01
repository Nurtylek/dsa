class TrieNode {
    constructor() {
        this.isWord = false;
        this.children = new Map();
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    add(word) {
        let curr = this.root;

        for (const char of word) {
            if (!curr.children.has(char)) {
                curr.children.set(char, new TrieNode())
            }
            curr = curr.children.get(char);
        }

        curr.isWord = true;
    }
}

const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
];

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const trie = new Trie();
    const COLS = board[0].length, ROWS = board.length, seen = new Set(), res = new Set();

    for (const word of words) {
        trie.add(word)
    }

    function dfs(r, c, node, word) {
        const key = r + '-' + c;

        if (
            Math.min(r, c) < 0 ||
            r >= ROWS ||
            c >= COLS ||
            seen.has(key) ||
            !node.children.has(board[r][c])
        ) return;

        seen.add(key);
        node = node.children.get(board[r][c]);
        word += board[r][c];

        if (node.isWord) {
            res.add(word);
        }

        for (const [dr, dt] of dirs) {
            dfs(dr + r, dt + c, node, word)
        }

        seen.delete(key);
    }

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            dfs(r, c, trie.root, "")
        }
    }

    return [...res];
};
