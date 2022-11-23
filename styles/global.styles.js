import styled from "@emotion/styled";
export const subColor = "grey";
export const darkColor = "black";
export const lightColor = "#ffffff";
export const subtleColor = "#000000";
export const borderradius = 15;

export const Main = styled.div`
  width: ${(props) => (props.width ? props.width : 650)}px;
  height: ${(props) => (props.height ? props.height : 500)}px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-radius: ${borderradius}px;
  background-color: transparent;
  border: 1px solid ${subColor};
  padding: 50px 25px 50px 25px;
  transition: 300ms;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background: none;
  font-size: 18px;
  padding: 12px 10px 15px 5px;
  width: 100%;
  //border-radius: ${borderradius}px;
  border-radius: 5px;
  box-shadow: none;
  cursor: pointer;
  margin-top: 10px;
  transition: 300ms;
  font-family: "Open Sans Condensed";
  :hover {
    transition: 300ms;
  }
  :disabled {
    opacity: 0.4;
  }
`;

export const DarkButton = styled(Button)`
  display: ${(props) => (props.display ? "none" : "inline")};

  background-color: ${darkColor};
  color: ${lightColor};
  border: 1px solid ${darkColor};
  :hover {
    background-color: ${lightColor};
    color: ${darkColor};
    border: 1px solid black;
  }
  :disabled {
    opacity: 1;
    //background-color: "#000000";
    //color: ${lightColor};
  }
`;

export const LightButton = styled(Button)`
  background-color: ${lightColor};
  color: ${darkColor};
  border: 1px solid ${darkColor};
`;

export const Label = styled.label`
  align-items: center;
  font-size: ${(props) => (props.fontsize ? props.fontsize : 15)}px;
  color: ${(props) => (props.color ? props.color : darkColor)};
  padding-bottom: ${(props) =>
    props.paddingbottom ? props.paddingbottom : 0}px;
  padding-top: ${(props) => (props.paddingtop ? props.paddingtop : 0)}px;
  padding-left: ${(props) => (props.paddingleft ? props.paddingleft : 0)}px;
  transition: 300ms;
  width: 100%;
  padding-left: ${(props) => (props.paddingleft ? props.paddingleft : 12)}px;
  text-align: ${(props) => (props.align ? props.align : "left")};
  visibility: ${(props) => (props.hide ? "hidden" : "visible")};
  font-weight: ${(props) => (props.fontweight ? props.fontweight : "bolder")};
  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
`;

export const Title = styled(Label)`
  font-size: ${(props) => (props.fontsize ? props.fontsize : 48)}px;
  color: ${(props) => (props.color ? props.color : darkColor)};
  font-weight: bolder;
  font-family: "Open Sans Condensed";
`;
{
  /* <textarea
className="bg-gray-200 w-full rounded-lg shadow border p-2"
rows="5"
placeholder="Ecrivez votre publication ici"
name="pub"
id="pub"
></textarea> */
}
export const TextArea = styled.textarea`
  font-family: "Open Sans Condensed";
  background: none;
  font-size: ${(props) => (props.fontsize ? props.fontsize : 15)}px;
  color: ${darkColor};
  padding: 15px 20px 15px 10px;
  padding-bottom: ${(props) =>
    props.paddingbottom ? props.paddingbottom : 15}px;
  padding-top: ${(props) => (props.paddingtop ? props.paddingtop : 15)}px;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${subColor};
  transition: 300ms;
  //border-radius: ${borderradius}px;
  transition: 100ms;
  ::placeholder {
    color: "#00ffff";
  }
  :focus {
    outline: none;
    border-bottom: 1.5px solid ${darkColor};
    color: ${darkColor};
    background: none;
    transition: 500ms;
  }
`;
export const Input = styled.input`
  font-family: "Open Sans Condensed";
  background: none;
  font-size: ${(props) => (props.fontsize ? props.fontsize : 15)}px;
  color: ${darkColor};
  padding: 15px 20px 15px 10px;
  padding-bottom: ${(props) =>
    props.paddingbottom ? props.paddingbottom : 15}px;
  padding-top: ${(props) => (props.paddingtop ? props.paddingtop : 15)}px;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${subColor};
  transition: 300ms;
  //border-radius: ${borderradius}px;
  transition: 100ms;
  ::placeholder {
    color: "#00ffff";
  }
  :focus {
    outline: none;
    border-bottom: 1.5px solid ${darkColor};
    color: ${darkColor};
    background: none;
    transition: 500ms;
  }
`;

export const Form = styled.form`
  width: ${(props) => (props.width ? props.width : 350)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: ${borderradius}px;
  background-color: transparent;
  border: 1px solid ${subColor};
  padding: 50px 25px 50px 25px;
  transition: 300ms;
`;
