
async function getYear() {
    let stringYear = await fetch('https://vercelbackend-oscar-s-projects-2a190a40.vercel.app/year')
    let response = await stringYear.json()

    document.querySelector("#year").textContent = `${response.year}`
}
getYear()