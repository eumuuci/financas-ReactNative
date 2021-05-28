import styled from 'styled-components/native'

export const Background = styled.View`
margin-top:20px;
padding-left:10px;
box-shadow: 15px 15px rgba(0,0,0,0.40);
background: rgba(0,0,0,0.04);
`
export const Tipo = styled.View`
flex-direction:row;
`
export const Iconview = styled.View`
flex-direction:row;
background:${props => props.tipo === 'despesa' ? '#870E0E' : '#026431'};
width:80px;
border-radius:5px;
`
export const TipoText = styled.Text`
color:#fff;
width:60px;
margin-right:-25px;
`
export const ValorText = styled.Text`
font-weight:bold;
margin-left:30px;
color: ${props => props.tipo === 'despesa' ? '#870E0E' : '#026431'};
`
export const DataText = styled.Text`
font-weight:bold;
margin-left:2px;
font-size:14;
text-align:center;
color:#000;
`