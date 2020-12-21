//throwing Errors and Exceptions
//and
//using Try...Catch to handle thrown Errors and Exceptions
//Error Types:
// EvalError, InternalError, RangeError, ReferenceError,
// SyntaxError, TypeError, URIError

try {
    throw new Error("javaScript");
} catch (err) {
    console.log("cought", err.name, err.message);
}