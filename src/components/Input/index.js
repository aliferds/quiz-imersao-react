import styled from 'styled-components'
import PropTypes from 'prop-types'

const InputBase = styled.input`
  padding: 10px;
  height: 2.5rem;
  font-size: 1.5rem;
  font-family: Lato, sans;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: .5rem;
  color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  :focus, :valid, :select {
    border: 3px solid ${({ theme }) => theme.colors.primary};
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

function Input(props) {
  return (
      <div>
        <InputBase
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </div>
  );
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
