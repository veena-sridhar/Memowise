import { connect } from 'react-redux';
import Decks from '../components/Decks';

const mapStateToProps = ({ studentDecks }) => {
  console.log('dashbaord studentDecks:', studentDecks);
  return ({ studentDecks });
};

export default connect(mapStateToProps)(Decks);



