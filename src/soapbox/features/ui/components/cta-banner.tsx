import { Localized } from '@fluent/react';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Banner, Button, HStack, Stack, Text } from 'soapbox/components/ui';
import { useAppSelector, useInstance, useRegistrationStatus, useSoapboxConfig } from 'soapbox/hooks';

const CtaBanner = () => {
  const instance = useInstance();
  const { isOpen } = useRegistrationStatus();
  const { displayCta } = useSoapboxConfig();
  const me = useAppSelector((state) => state.me);

  if (me || !displayCta || !isOpen) return null;

  return (
    <div data-testid='cta-banner' className='hidden lg:block'>
      <Banner theme='frosted'>
        <HStack alignItems='center' justifyContent='between'>
          <Stack>
            <Text theme='white' size='xl' weight='bold'>
              <FormattedMessage id='signup_panel.title' defaultMessage='New to {site_title}?' values={{ site_title: instance.title }} />
            </Text>

            <Text theme='white' weight='medium' className='opacity-90'>
              <FormattedMessage id='signup_panel.subtitle' defaultMessage="Sign up now to discuss what's happening." />
            </Text>
          </Stack>

          <HStack space={2} alignItems='center'>
            <Localized id='account-Action--login'>
              <Button theme='secondary' to='/login'>
                Sign in
              </Button>
            </Localized>

            <Localized id='account-Action--register'>
              <Button theme='accent' to='/signup'>
                Sign up
              </Button>
            </Localized>
          </HStack>
        </HStack>
      </Banner>
    </div>
  );
};

export default CtaBanner;
