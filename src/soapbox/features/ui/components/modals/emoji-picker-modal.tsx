import React from 'react';
import { FormattedMessage } from 'react-intl';
import { spring } from 'react-motion';

import EmojiPickerDropdown from 'soapbox/features/emoji/components/emoji-picker-dropdown';

import Motion from '../../util/optional-motion';

import type { Emoji } from 'soapbox/features/emoji';

interface IEmojiPickerModal {
  onPickEmoji: (emoji: Emoji) => void
  onClose: () => void
}

const EmojiPickerModal: React.FC<IEmojiPickerModal> = ({ onPickEmoji, onClose }) => {
  const handlePickEmoji = (emoji: Emoji) => {
    onPickEmoji(emoji);
    onClose();
  };

  return (
    <Motion defaultStyle={{ top: 100 }} style={{ top: spring(0) }}>
      {({ top }) => (
        <div className='modal-root__modal actions-modal' style={{ top: `${top}%` }}>
          <ul>
            <li>
              <EmojiPickerDropdown onPickEmoji={handlePickEmoji} visible setVisible={() => { }} update={() => { }} dynamicWidth emojiSize={{ size: 34, buttonSize: 46 }} />
            </li>

            <li className='dropdown-menu__separator' />

            <li>
              <button type='button' onClick={onClose}>
                <FormattedMessage id='lightbox.close' defaultMessage='Cancel' />
              </button>
            </li>
          </ul>
        </div>
      )}
    </Motion>
  );
};

export default EmojiPickerModal;
