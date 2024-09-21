    function visualizeTrie(node, prefix = '', isTail = true) {
    // If the current node is the end of a word, print it
        if (node.isWord) {
            console.log(`${prefix}${isTail ? '└── ' : '├── '}(End of word)`);
        }

        const children = Array.from(node.children.keys());
        for (let i = 0; i < children.length; i++) {
            const childKey = children[i];
            const childNode = node.children.get(childKey);

            // Print the current character and recur for its children
            console.log(`${prefix}${isTail ? '└── ' : '├── '}${childKey}`);

            // Recursively visualize the next level
            this.visualizeTrie(childNode, prefix + (isTail ? '    ' : '│   '), i === children.length - 1);
        }
    }
