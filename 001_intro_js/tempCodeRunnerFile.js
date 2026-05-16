const eAgora = () =>{
    let cont = 1
    const f1 = () => console.log(cont)
    cont++
    const f2 = () => console.log(cont)
    cont++
    return {f1, f2}
}
const res = eAgora()
// As linhas a seguir executam as funções f1 e f2, que estão dentro de res
res.f1() // Roda com o cont final
res.f2()