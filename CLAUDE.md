# Project Context for Claude

## Project Overview
This is a documentation-as-code project based on Nextra.js, which utilizes Next.js static site generation features. The project title is "Experimenting To Learn" (ETL), which references the data engineering concept of Extract, Transform, Load. This naming reflects a data-oriented or data-driven knowledge transfer methodology approach to documentation and learning materials.

## Project Structure
- **Environment**: Node.js 20 development container
- **Container Setup**: Uses `.devcontainer/` with Dockerfile for consistent development environment
- **User**: Runs as `node` user with sudo access in the container
- **Framework**: Nextra.js for documentation site generation
- **Dependencies**: React, Next.js, Nextra theme for docs

## Development Environment
- **Container**: Node.js 20 base image
- **Tools**: Includes basic development tools (less, man-db, sudo) and Claude Code CLI
- **Access**: The `node` user has passwordless sudo access
- **Environment Variable**: `DEVCONTAINER=true` is set to help with environment detection

## Current State
- Nextra documentation project initialized with template
- Ready for content creation and documentation development
- Git repository is initialized

## Instructions for Claude
When working on this project:
1. This is a Nextra.js documentation site using Next.js static generation
2. Content is written in MDX format in the `pages/` directory
3. Use `npm run dev` to start the development server
4. Use `npm run build` to build for production
5. Configuration is managed through `theme.config.js` and `next.config.js`
6. The project follows documentation-as-code principles with data-driven knowledge transfer methodology
7. Consider the ETL (Extract, Transform, Load) concept when organizing content and learning materials