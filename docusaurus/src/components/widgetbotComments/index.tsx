import * as React from 'react'
import WidgetBot from '@widgetbot/react-embed'

interface CommentsProps {
	discordChannel: string;
}

// const discordServer = "1065445524704079922"



const WidgetBotComments = ({discordServer="1065445524704079922",discordChannel}) => (
  <WidgetBot
	server={discordServer}
	channel={discordChannel}
	height={"750"}
	width={"100%"}
  />
)

export default WidgetBotComments