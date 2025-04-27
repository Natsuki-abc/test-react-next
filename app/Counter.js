'use client';
import { useState } from "react";

export default function Counter() {

    const incrementCount = () => {
        setCount(count + 1)
    };

    return (
        <div>
            <p>現在のカウント：{count}</p>
            <button onClick={incrementCount}>カウントを増やす</button>
        </div>
    );
}