# Project Context for Claude

## Project Overview
This is a documentation-as-code project based on Nextra.js, which utilizes Next.js static site generation features. The project title is "Experimenting To Learn" (ETL), which references the data engineering concept of Extract, Transform, Load. This naming reflects a data-oriented or data-driven knowledge transfer methodology approach to documentation and learning materials.

## Project Structure
- **Environment**: Node.js 20 development container
- **Container Setup**: Uses `.devcontainer/` with Dockerfile for consistent development environment
- **User**: Runs as `node` user with sudo access in the container

## Development Environment
- **Container**: Node.js 20 base image
- **Tools**: Includes basic development tools (less, man-db, sudo)
- **Access**: The `node` user has passwordless sudo access
- **Environment Variable**: `DEVCONTAINER=true` is set to help with environment detection

## Current State
- Project is in early setup phase
- No package.json, source files, or documentation present yet
- Git repository is initialized

## Instructions for Claude
When working on this project:
1. This appears to be a writing-focused project, so consider content creation, documentation, or writing tools
2. Use Node.js best practices when adding any JavaScript/TypeScript functionality
3. The development environment is containerized, so all commands should work within the container context
4. Check for package.json or create one if Node.js packages are needed
5. Consider the project might involve writing tools, content management, or publishing workflows