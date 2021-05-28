import styled from 'styled-components/native';

export const Background = styled.TouchableOpacity`
background: ${Platform.OS === 'ios' ? '#000' : 'transparent'};
position:absolute;
justify-content: flex-end;
width: 100%;
height: 100%;
`;

export const Header = styled.View`
width: 100%;
padding: 16px;
justify-content: flex-end;
align-items: flex-end;
background: #fff;
border-bottom-width: 1px;
border-color: #222;
`;