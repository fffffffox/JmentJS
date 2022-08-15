var Jment = {
    doc: {
        initDoc: (charset = "UTF-8", keywords = "JmentWebPage", author = "Jment", description = "JmentWebPage", title = "JmentWebPage") => {
            org.jment.data.isReady = false;
            if (org.jment.data.isInit) {
                console.error("Repeat initialization");
                throw new Error("Repeat initialization");
            } else {
                org.jment.data.outDocumentHead += org.jment.privateFunc.labelHead("!DOCTYPE html");
                org.jment.data.outDocumentHead += org.jment.privateFunc.labelHead("html");
                org.jment.data.outDocumentHead += org.jment.privateFunc.labelHead("head");
                org.jment.data.outDocumentHead += org.jment.privateFunc.labelHead(`meta charset=${charset}`);
                org.jment.data.outDocumentHead += org.jment.privateFunc.labelHead(`meta name=\'keywords\' content=${keywords}`);
                org.jment.data.outDocumentHead += org.jment.privateFunc.labelHead(`meta name=\'author\' content=${author}`);
                org.jment.data.outDocumentHead += org.jment.privateFunc.labelHead(`meta name=\'description\' content=${description}`);
                org.jment.data.outDocumentHead += org.jment.privateFunc.label("title", title)
                org.jment.data.outDocumentHead += org.jment.privateFunc.labelEnd("head");
                org.jment.data.outDocumentHead += org.jment.privateFunc.labelHead("body");
                org.jment.data.outDocumentEnd += org.jment.privateFunc.labelEnd("body");
                org.jment.data.outDocumentEnd += org.jment.privateFunc.labelEnd("html");
            }
            org.jment.data.isReady = true;
            org.jment.data.isInit = true;
        },

        mergeDoc: () => {
            if (!org.jment.data.isReady) {
                throw new Error("Not initialized or in progress");
            }
            org.jment.data.isReady = false;
            org.jment.data.outDocument = org.jment.data.outDocumentHead + org.jment.data.outDocumentEnd;
            org.jment.data.isReady = true;
        },

        outDoc: () => {
            if (!org.jment.data.isReady) {
                throw new Error("Not initialized or in progress");
            }
            if (org.jment.data.outDocument === "") {
                throw new Error("Please output after merging");
            }
            org.jment.data.isReady = false;
            document.write(org.jment.data.outDocument);
            org.jment.data.isReady = true;
        }
    },

    babel: {
        basicTags : {
            h1: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`h1${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            h2: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`h2${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            h3: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`h3${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            h4: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`h4${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            h5: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`h5${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            h6: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`h6${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            p: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`p${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            br: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.labelHead(`br${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            hr: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.labelHead(`hr${addValue}`, value);
                org.jment.data.isReady = true;
            }
        },

        textFormat : {
            b: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`b${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            code: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`code${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            em: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`em${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            i: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`i${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            kbd: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`kbd${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            pre: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`pre${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            small: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`small${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            strong: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`strong${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            abbr: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`abbr${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            address: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`address${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            bdo: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`bdo${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            blockquote: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`blockquote${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            cite: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`cite${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            del: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`del${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            ins: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`ins${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            sub: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`sub${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            sup: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`sup${addValue}`, value);
                org.jment.data.isReady = true;
            }
        },

        links : {
            a: (href, value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`a href=\'${href}\'${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            image: (loading = "JmentImage", src, alt = "JmentImage", height = "24px", width = "24px", addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.labelHead(`img loading=\'${loading}\' src=\'${src}\' src=\'${alt}\' height=\'${height}\'  width=\'${width}\'${addValue}`, value); //<img loading="" src= "">
                org.jment.data.isReady = true;
            },

            js: (src) => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.labelHead(`script src=\'${src}\'`);
                org.jment.data.isReady = true;
            },

            css: (src) => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.labelHead(`link href=\'${src}\' rel=\'stylesheet\' type=\'text/css\'`);
                org.jment.data.isReady = true;
            }
        },

        sections : {
            style: (value) => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label("style type=\'text/css\'", value);
                org.jment.data.isReady = true;
            },
    
            script: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`script${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            div: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`div${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            span: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`span${addValue}`, value);
                org.jment.data.isReady = true;
            },
            iframe: (value, src, addValue) => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`iframe src=\'${src}\'${addValue}`, value);
                org.jment.data.isReady = true;
            }
        },

        list : {
            ul: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`ul${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            li: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`li${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            ol: (value, addValue = "") => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`ol${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            dl: (value, addValue) => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`dl${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            dt: (value, addValue) => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`dt${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            dd: (value, addValue) => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`dd${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            table: (value, addValue) => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`table${addValue}`, value);
                org.jment.data.isReady = true;
            },
            
            tr: (value, addValue) => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`tr${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            th: (value, addValue) => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`th${addValue}`, value);
                org.jment.data.isReady = true;
            },
    
            td: (value, addValue) => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`td${addValue}`, value);
                org.jment.data.isReady = true;
            }
        },

        forms : {
            from: (action, method = "post/get", value) => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.label(`form action=\'${action}\' method=\'${method}\'`, value);
                org.jment.data.isReady = true;
            },
            
            text: (name, size, maxlength) => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.labelHead(`input type=\'text\' name=\'${name}\' size=\'${size}\' maxlength=\'${maxlength}\'`);
                org.jment.data.isReady = true;
            },

            password: (name, size, maxlength) => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.labelHead(`input type=\'password\' name=\'${name}\' size=\'${size}\' maxlength=\'${maxlength}\'`);
                org.jment.data.isReady = true;
            },

            checkbox: (checked) => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.labelHead(`input type=\'checkbox\' checked=\'${checked}\'`);
                org.jment.data.isReady = true;
            },

            radio: (checked) => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.labelHead(`input type=\'radio\' checked=\'${checked}\'`);
                org.jment.data.isReady = true;
            },

            submit: (checked) => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.labelHead(`input type=\'checkbox\' checked=\'${checked}\'`);
                org.jment.data.isReady = true;
            },

            reset: () => {
                if (!org.jment.data.isReady) {
                    throw new Error("Not initialized or in progress");
                }
                org.jment.data.isReady = false;
                org.jment.data.outDocumentHead += org.jment.privateFunc.labelHead(`input type=\'reset\'`);
                org.jment.data.isReady = true;
            },
        }
    }
};

var org = {
    jment: {
        data: {
            outDocumentHead: "",
            outDocumentEnd: "",
            outDocument: "",
            isInit: false,
            isReady: false
        },

        privateFunc: {
            labelHead: (value) => {
                return `<${value}>`;
            },

            labelEnd: (value) => {
                return `</${value}>`;
            },

            label: (labelValue, value) => {
                return `<${labelValue}>${value}</${labelValue}>`
            }
        }
    }
};