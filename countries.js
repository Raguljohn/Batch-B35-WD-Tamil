    const getcountries = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseTYpe ="json";
    
    xhr.onload = ()  => {
        const countries = xhr.response;
        const population = xhr.response;
        console.log("ALL countries", countries);
        console.log("ALL countries", population);
    };
    };
     
    getcountries();
