//library is in a closure, use this private variable to reduce size of minified file
var createBinding = ko.kendo.bindingFactory.createBinding.bind(ko.kendo.bindingFactory);

//use constants to ensure consistency and to help reduce minified file size
var CLICK = "click",
    CENTER = "center",
    CHECK = "check",
    CHECKED = "checked",
    CLICKED = "clicked",
    CLOSE = "close",
    COLLAPSE = "collapse",
    CONTENT = "content",
    DATA = "data",
    ENABLE = "enable",
    EXPAND = "expand",
    ENABLED = "enabled",
    EXPANDED = "expanded",
    ERROR = "error",
    FILTER = "filter",
    HIDE = "hide",
    INFO = "info",
    ISOPEN = "isOpen",
    MAX = "max",
    MIN = "min",
    OPEN = "open",
    PALETTE = "palette",
    READONLY = "readonly",
    RESIZE = "resize",
    SEARCH = "search",
    SELECT = "select",
    SELECTED = "selected",
    SELECTEDINDEX = "selectedIndex",
    SHOW = "show",
    SIZE = "size",
    SUCCESS = "success",
    TARGET = "target",
    TITLE = "title",
    VALUE = "value",
    VALUES = "values",
    WARNING = "warning",
    ZOOM = "zoom";