document.addEventListener('DOMContentLoaded', () => {
    // Get all examples
    let examples = document.querySelectorAll('.example');
    console.log("Examples:", examples);
    // Get innerText from all examples
    examples.forEach(example => {
        console.log(example.innerText);
        // Split each example by its letters
        let letters = example.innerText.split('');
        console.log("Letters:", letters);
        // Test styling for each letter
        letters.forEach(letter => {
            console.log("Letter:", letter);
        })
    })
})