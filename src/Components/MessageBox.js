import { Container,CloseButton } from 'react-bootstrap';

const MessageBox = (props) => {
    let positionStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center'
    };

    switch (props.position) {
        case "topLeft":
            positionStyle = { position: 'absolute', top: 0, left: 0, justifyContent: 'flex-start', alignItems: 'flex-start' };
            break;
        case "topRight":
            positionStyle = { position: 'absolute', top: 0, right: 0, justifyContent: 'flex-start', alignItems: 'flex-end' };
            break;
        case "bottomLeft":
            positionStyle = { position: 'absolute', bottom: 0, left: 0, justifyContent: 'flex-start', alignItems: 'flex-end' };
            break;
        case "bottomRight":
            positionStyle = { position: 'absolute', bottom: 0, right: 0, justifyContent: 'flex-start', alignItems: 'flex-start' };
            break;
        default:
          positionStyle = {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center'
        };
            break;
    }

    const boxStyle = {
        display: 'flex',
        flexDirection: "column",
        margin:"20px",
        padding:0,
        width: props.width ? props.width : '300px',
        height: props.height ? props.height : '200px',
        color: props.color ? props.color : 'black',
        border: props.border ? props.border : "1px solid",
        borderColor: props.borderColor ? props.borderColor : 'grey',
        backgroundColor: props.backgroundColor ? props.backgroundColor : "white",
        borderRadius:"10px",
        ...positionStyle
    };

    const titleStyle = {
        backgroundColor: props.headerBackgroundColor ? props.headerBackgroundColor : 'lightgray',
        borderTopRightRadius:'10px',
        borderTopLeftRadius: '10px',
        margin: 0,
        padding: 0,
        height:"50px",
        color:props.titleColor? props.titleColor:"gray"

    };

    return (
      <div style={boxStyle}>
               <Container className='d-flex flex-row justify-content-between' style={titleStyle}>
                <p className='h4  m-1 p-1' >
                  {props.title? props.title:'Your title'}</p>
                  <CloseButton className='m-2' onClick={props.onClose} />
               </Container>
            <Container className='container-fluid mt-2'>
           {props.message? props.message:'Message body'} 
        </Container>

      </div>
  
    );
}

export default MessageBox;
