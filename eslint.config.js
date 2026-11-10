import globals from "globals";

export default [
    {
        files: ["script.js", "tests/**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        rules: {
            "no-undef": "error",
            "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
            "no-var": "error",
            "prefer-const": "error",
            "no-unreachable": "error"
        }
    }
];
