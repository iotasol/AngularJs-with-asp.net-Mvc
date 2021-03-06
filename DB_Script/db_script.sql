USE [sampleAngularWithMVC]
GO
/****** Object:  Table [dbo].[tb_Menu]    Script Date: 02/16/2015 12:27:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tb_Menu](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](250) NULL,
	[groupName] [varchar](250) NULL,
	[orderValue] [float] NULL,
	[url] [varchar](250) NULL,
	[contentText] [varchar](max) NULL,
	[createdOn] [datetime] NULL,
	[updatedOn] [datetime] NULL,
	[active] [bit] NULL,
	[deleted] [bit] NULL,
 CONSTRAINT [PK_tb_Menu] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[tb_Menu] ON
INSERT [dbo].[tb_Menu] ([id], [name], [groupName], [orderValue], [url], [contentText], [createdOn], [updatedOn], [active], [deleted]) VALUES (1, NULL, NULL, NULL, NULL, NULL, NULL, CAST(0x0000A43E013D74C4 AS DateTime), NULL, 1)
INSERT [dbo].[tb_Menu] ([id], [name], [groupName], [orderValue], [url], [contentText], [createdOn], [updatedOn], [active], [deleted]) VALUES (2, N'Menu Name', N'AU', 120, N'http://localhost:50837/Menu', N'Here is the content text', CAST(0x0000A43E013DDD94 AS DateTime), NULL, 1, 0)
INSERT [dbo].[tb_Menu] ([id], [name], [groupName], [orderValue], [url], [contentText], [createdOn], [updatedOn], [active], [deleted]) VALUES (3, N'Menu Name 2', N'MU', 500, N'http://localhost:50837/Menu', N'content text', CAST(0x0000A44100CC4CBE AS DateTime), NULL, 1, 0)
SET IDENTITY_INSERT [dbo].[tb_Menu] OFF
