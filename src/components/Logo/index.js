import styled from 'styled-components'
import Image from 'next/image'

const LogoContainer = styled.div`
    font-size: 1.8rem;
    width: fit-content;
`;

function Logo(props) {
    return (
        <LogoContainer>
            <Image
                src={props.src}
                alt={props.alt}
                width={500}
                height={300}
            />
        </LogoContainer>
    )
};

export default Logo;