import { Container, BtnPage } from "./styles"


function Pagination({handleBtnPageClick, handlePageEnter, input, setInput}) {

    function handleOnChange(input) {
        if (!isNaN(parseInt(input[input.length-1])) || input === "") { // checar se input eh numero
            setInput(input)
        }
    }

    return (
      <Container>
        <BtnPage onClick={() => handleBtnPageClick(false)} color={"#E3350DCC"}>{"<"}</BtnPage>
        <input type="text" value={input}
                onChange={(e) => {handleOnChange(e.target.value)}}
                onKeyDown={(e) => {if (e.code === "Enter") handlePageEnter(e.target.value)}}/>
        <BtnPage onClick={() => handleBtnPageClick(true)} color={"#E3350DEE"}>{">"}</BtnPage>
      </Container>
    )
}

export default Pagination