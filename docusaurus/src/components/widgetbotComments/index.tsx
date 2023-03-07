import * as React from 'react'
import WidgetBot from '@widgetbot/react-embed'

interface CommentsProps {
	discordChannel: string;
}

// const discordServer = "1065445524704079922"

const WidgetBotComments = ({discordServer="1065445524704079922",discordChannel,height="1000",width="1000"}) => (
  <WidgetBot
	server={discordServer}
	channel={discordChannel}
	height={height}
	width={width}
  />
)

export default WidgetBotComments