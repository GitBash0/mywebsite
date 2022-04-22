
$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxgNbNwlLMkS8pZrVCrQxzD3awfCD9P_e4ZGxQ4T6ksMSa30jyK_njcn9ukFQOd_tyi7w/exec",
    data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})