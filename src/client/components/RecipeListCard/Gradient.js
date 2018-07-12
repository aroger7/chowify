import DIV from 'components/common/DIV';

const Gradient = DIV.extend`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    to top right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.2)
  );
`;

export default Gradient;
