export = openBrowser;
/**
 * Reads the BROWSER environment variable and decides what to do with it. Returns
 * true if it opened a browser or ran a node.js script, otherwise false.
 */
declare function openBrowser(url: any): boolean;
