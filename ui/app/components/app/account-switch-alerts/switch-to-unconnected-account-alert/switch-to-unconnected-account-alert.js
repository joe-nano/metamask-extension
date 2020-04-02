import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { I18nContext } from '../../../../contexts/i18n'
import Popover from '../../../ui/popover'
import Button from '../../../ui/button'

const SwitchToUnconnectedAccountAlert = ({ dismissSwitchedToUnconnectedAccountAlert }) => {
  const t = useContext(I18nContext)
  const dispatch = useDispatch()
  return (
    <Popover
      title={t('notConnected')}
      subtitle={t('notConnected')}
      onClose={dismissSwitchedToUnconnectedAccountAlert}
      footer={(
        <>
          <Button type="secondary" onClick={dismissSwitchedToUnconnectedAccountAlert}>
            { t('dismiss') }
          </Button>
          <Button type="primary" onClick={() => dispatch()}>
            { t('connect') }
          </Button>
        </>
      )}
    >

    </Popover>
  )
}

SwitchToUnconnectedAccountAlert.propTypes = {
  dismissSwitchedToUnconnectedAccountAlert: PropTypes.func.isRequired,
}

export default SwitchToUnconnectedAccountAlert
