import styled from 'styled-components'

const LogoContainer = styled.div`
    font-size: 1.8rem;
    width: fit-content;
`;

function Logo(props) {
    return (
        <LogoContainer>
            {props.children}
        </LogoContainer>
    )
};

export default Logo;