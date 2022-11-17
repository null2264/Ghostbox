import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';

import AccountSearch from 'soapbox/components/account-search';
import { CardTitle, HStack, IconButton, Stack, Text } from 'soapbox/components/ui';
import { ChatKeys, useChats } from 'soapbox/queries/chats';
import { queryClient } from 'soapbox/queries/client';

interface IChatPageNew {
}

/** New message form to create a chat. */
const ChatPageNew: React.FC<IChatPageNew> = () => {
  const history = useHistory();
  const { getOrCreateChatByAccountId } = useChats();

  const handleAccountSelected = async (accountId: string) => {
    const { data } = await getOrCreateChatByAccountId(accountId);
    history.push(`/chats/${data.id}`);
    queryClient.invalidateQueries(ChatKeys.chatSearch());
  };

  return (
    <Stack className='h-full'>
      <Stack className='flex-grow py-6 px-4 sm:p-6 space-y-4'>
        <HStack alignItems='center'>
          <IconButton
            src={require('@tabler/icons/arrow-left.svg')}
            className='sm:hidden h-7 w-7 mr-2 sm:mr-0'
            onClick={() => history.push('/chats')}
          />

          <CardTitle title='New Message' />
        </HStack>

        <HStack space={2} alignItems='center'>
          <Text>
            <FormattedMessage
              id='chats.new.to'
              defaultMessage='To:'
            />
          </Text>

          <AccountSearch
            onSelected={handleAccountSelected}
            placeholder='Type a name'
            theme='search'
            showButtons={false}
            autoFocus
            className='mb-0.5'
            followers
          />
        </HStack>
      </Stack>
    </Stack>
  );
};

export default ChatPageNew;