import { TouchableOpacity } from 'react-native';
import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
} from 'react-native-heroicons/outline';

export default function FilterButton() {
  return (
    <TouchableOpacity>
      <BarsArrowDownIcon size={30} color='#374151' />
    </TouchableOpacity>
  );
}
