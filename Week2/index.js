



function hanoi(n, start, end, middle) {
    if (n === 1) {
        console.log(`${start} -> ${end}`);
        return;
    }

    hanoi(n - 1, start, middle, end);

    console.log(`${start} -> ${end}`);

    hanoi(n - 1, middle, end, start);
}

    hanoi(3, 'A', 'C', 'B');