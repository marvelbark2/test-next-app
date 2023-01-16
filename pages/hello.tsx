import { useState, useEffect } from "react";

function useMounted() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    return mounted
}
function Hello() {

    const mounted = useMounted();

    if (!mounted) return <span>Loading...</span>;
    return (
        <h1>Hello world</h1>
    );
}

export default Hello;