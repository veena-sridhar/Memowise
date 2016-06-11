import { connect } from 'react-redux';
import Decks from '../components/Decks';

const mapStateToProps = ({ studentDecks }) => ({ studentDecks });

export default connect(mapStateToProps)(Decks);



