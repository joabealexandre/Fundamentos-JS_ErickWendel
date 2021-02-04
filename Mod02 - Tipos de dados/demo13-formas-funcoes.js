function minhaFuncao1(parametro1) {
    return 'aee';
}

const minhaFuncao2 = function (parametro1) {
    return `aee ${parametro1}`
}

const minhaFuncao3 = (parametro1) => {
    return `aee ${parametro1}`
}

const minhaFuncao4 = parametro1 => `aee ${parametro1}`;

const obj1 = {
    minhaFuncao: parametro => `aee ${parametro}`
}

obj1.minhaFuncao('teste');

const obj2 = {
    minhaFuncao (parametro1) {
        return `aee ${parametro}`;
    }
}

obj2.minhaFuncao('teste');