{
    const table = {
        tagName: 'table',
        attrs: {
            border: "1",
        },
        children: [
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["1x1"],
                    },
                    {
                        tagName: "td",
                        children: ["1x2"],
                    },
                ]
            },
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["2x1"],
                    },
                    {
                        tagName: "td",
                        children: ["2x2"],
                    },
                ]
            }
        ]
    }

    function htmlTree(parent = document.body, level = 0) {
        let str = "";
        str += "    ".repeat(level) + "<" + parent.tagName;

        const attrs = parent.attrs;
        for (const attr in attrs) {
            str += " " + attr + '="' + attrs[attr] + '"';
        }
        str += ">\n";

        if (parent.children && parent.children.length > 0) {
            for (const child of parent.children) {
                if (typeof child === 'string') {
                    str += "    ".repeat(level + 1) + child + "\n";
                }
                else {
                    str += htmlTree(child, level + 1);
                }
            }
        }

        str += "    ".repeat(level) + "</" + parent.tagName + ">\n";
        return str;
    }

    document.write(htmlTree(table));

}//HTML tree



{
    const table = {
        tagName: 'table',
        attrs: {
            border: "1",
        },
        children: [
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["1x1"],
                    },
                    {
                        tagName: "td",
                        children: ["1x2"],
                    },
                ]
            },
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["2x1"],
                    },
                    {
                        tagName: "td",
                        children: ["2x2"],
                    },
                ]
            }
        ]
    }

    function domTree(parent, element) {
        const createdElement = document.createElement(element.tagName);
        parent.append(createdElement);

        const attrs = element.attrs;
        for (const attr in attrs) {
            createdElement.setAttribute(attr, attrs[attr]);
        }

        if (element.children && element.children.length > 0) {
            for (const child of element.children) {
                if (typeof child === 'string') {
                    const textNode = document.createTextNode(child);
                    createdElement.appendChild(textNode);
                } else {
                    domTree(createdElement, child);
                }
            }
        }

        return createdElement;
    }

    domTree(document.body, table);
}//DOM tree



{
    const arr = [1, "string", null, undefined, { a: 15, b: 10, c: [1, 2, 3, 4], d: undefined, e: true }, true, false];

        const table = {
            tagName: 'table',
            attrs: {
                border: "1",
            },
            children: [
                {
                    tagName: 'tr',
                    children: [
                        {
                            tagName: "td",
                            children: ["1x1"],
                        },
                        {
                            tagName: "td",
                            children: ["1x2"],
                        },
                    ]
                },
                {
                    tagName: 'tr',
                    children: [
                        {
                            tagName: "td",
                            children: ["2x1"],
                        },
                        {
                            tagName: "td",
                            children: ["2x2"],
                        },
                    ]
                }
            ]
        }

        function deepCopy(structure) {
            let newStructure = structure;
            if (Array.isArray(structure)) {
                newStructure = [];
                for (const element of structure) {
                    newStructure.push(deepCopy(element));
                }
            } else if (typeof structure === 'object' && structure !== null) {
                newStructure = {};
                for (const key in structure) {
                    newStructure[key] = deepCopy(structure[key]);
                }
            } 
            return newStructure
        }

        const arr2 = deepCopy(arr);
        console.log(arr2);

        const table2 = deepCopy(table);
        console.log(table2);
}//Deep Copy
